# `dataAwsccEc2Vpc` Submodule <a name="`dataAwsccEc2Vpc` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2Vpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2Vpc <a name="DataAwsccEc2Vpc" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpc awscc_ec2_vpc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2Vpc(scope Construct, id *string, config DataAwsccEc2VpcConfig) DataAwsccEc2Vpc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig">DataAwsccEc2VpcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig">DataAwsccEc2VpcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2Vpc resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.DataAwsccEc2Vpc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.DataAwsccEc2Vpc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.DataAwsccEc2Vpc_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.DataAwsccEc2Vpc_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2Vpc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2Vpc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2Vpc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2Vpc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.cidrBlockAssociations">CidrBlockAssociations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.defaultNetworkAcl">DefaultNetworkAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.defaultSecurityGroup">DefaultSecurityGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.enableDnsHostnames">EnableDnsHostnames</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.enableDnsSupport">EnableDnsSupport</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.instanceTenancy">InstanceTenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList">DataAwsccEc2VpcTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.vpcEncryptionControl">VpcEncryptionControl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference">DataAwsccEc2VpcVpcEncryptionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `CidrBlockAssociations`<sup>Required</sup> <a name="CidrBlockAssociations" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.cidrBlockAssociations"></a>

```go
func CidrBlockAssociations() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultNetworkAcl`<sup>Required</sup> <a name="DefaultNetworkAcl" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.defaultNetworkAcl"></a>

```go
func DefaultNetworkAcl() *string
```

- *Type:* *string

---

##### `DefaultSecurityGroup`<sup>Required</sup> <a name="DefaultSecurityGroup" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.defaultSecurityGroup"></a>

```go
func DefaultSecurityGroup() *string
```

- *Type:* *string

---

##### `EnableDnsHostnames`<sup>Required</sup> <a name="EnableDnsHostnames" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.enableDnsHostnames"></a>

```go
func EnableDnsHostnames() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableDnsSupport`<sup>Required</sup> <a name="EnableDnsSupport" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.enableDnsSupport"></a>

```go
func EnableDnsSupport() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InstanceTenancy`<sup>Required</sup> <a name="InstanceTenancy" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.instanceTenancy"></a>

```go
func InstanceTenancy() *string
```

- *Type:* *string

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.ipv4IpamPoolId"></a>

```go
func Ipv4IpamPoolId() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskLength`<sup>Required</sup> <a name="Ipv4NetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.ipv4NetmaskLength"></a>

```go
func Ipv4NetmaskLength() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.ipv6CidrBlocks"></a>

```go
func Ipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.tags"></a>

```go
func Tags() DataAwsccEc2VpcTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList">DataAwsccEc2VpcTagsList</a>

---

##### `VpcEncryptionControl`<sup>Required</sup> <a name="VpcEncryptionControl" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.vpcEncryptionControl"></a>

```go
func VpcEncryptionControl() DataAwsccEc2VpcVpcEncryptionControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference">DataAwsccEc2VpcVpcEncryptionControlOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2Vpc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpcConfig <a name="DataAwsccEc2VpcConfig" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_vpc#id DataAwsccEc2Vpc#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VpcTags <a name="DataAwsccEc2VpcTags" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcTags {

}
```


### DataAwsccEc2VpcVpcEncryptionControl <a name="DataAwsccEc2VpcVpcEncryptionControl" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControl {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusions <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusions" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusions {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice {

}
```


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

&dataawsccec2vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VpcTagsList <a name="DataAwsccEc2VpcTagsList" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2VpcTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2VpcTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2VpcTagsOutputReference <a name="DataAwsccEc2VpcTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2VpcTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTags">DataAwsccEc2VpcTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcTags">DataAwsccEc2VpcTags</a>

---


### DataAwsccEc2VpcVpcEncryptionControlOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.egressOnlyInternetGatewayExclusion">EgressOnlyInternetGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.elasticFileSystemExclusion">ElasticFileSystemExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.internetGatewayExclusion">InternetGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.lambdaExclusion">LambdaExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.natGatewayExclusion">NatGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.resourceExclusions">ResourceExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.virtualPrivateGatewayExclusion">VirtualPrivateGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcEncryptionControlId">VpcEncryptionControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcLatticeExclusion">VpcLatticeExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcPeeringExclusion">VpcPeeringExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControl">DataAwsccEc2VpcVpcEncryptionControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressOnlyInternetGatewayExclusion`<sup>Required</sup> <a name="EgressOnlyInternetGatewayExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.egressOnlyInternetGatewayExclusion"></a>

```go
func EgressOnlyInternetGatewayExclusion() *string
```

- *Type:* *string

---

##### `ElasticFileSystemExclusion`<sup>Required</sup> <a name="ElasticFileSystemExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.elasticFileSystemExclusion"></a>

```go
func ElasticFileSystemExclusion() *string
```

- *Type:* *string

---

##### `InternetGatewayExclusion`<sup>Required</sup> <a name="InternetGatewayExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.internetGatewayExclusion"></a>

```go
func InternetGatewayExclusion() *string
```

- *Type:* *string

---

##### `LambdaExclusion`<sup>Required</sup> <a name="LambdaExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.lambdaExclusion"></a>

```go
func LambdaExclusion() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `NatGatewayExclusion`<sup>Required</sup> <a name="NatGatewayExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.natGatewayExclusion"></a>

```go
func NatGatewayExclusion() *string
```

- *Type:* *string

---

##### `ResourceExclusions`<sup>Required</sup> <a name="ResourceExclusions" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.resourceExclusions"></a>

```go
func ResourceExclusions() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `VirtualPrivateGatewayExclusion`<sup>Required</sup> <a name="VirtualPrivateGatewayExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.virtualPrivateGatewayExclusion"></a>

```go
func VirtualPrivateGatewayExclusion() *string
```

- *Type:* *string

---

##### `VpcEncryptionControlId`<sup>Required</sup> <a name="VpcEncryptionControlId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcEncryptionControlId"></a>

```go
func VpcEncryptionControlId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpcLatticeExclusion`<sup>Required</sup> <a name="VpcLatticeExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcLatticeExclusion"></a>

```go
func VpcLatticeExclusion() *string
```

- *Type:* *string

---

##### `VpcPeeringExclusion`<sup>Required</sup> <a name="VpcPeeringExclusion" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.vpcPeeringExclusion"></a>

```go
func VpcPeeringExclusion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControl
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControl">DataAwsccEc2VpcVpcEncryptionControl</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">EgressOnlyInternetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">ElasticFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">NatGateway</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">VirtualPrivateGateway</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">VpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">VpcPeering</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusions">DataAwsccEc2VpcVpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressOnlyInternetGateway`<sup>Required</sup> <a name="EgressOnlyInternetGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```go
func EgressOnlyInternetGateway() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `ElasticFileSystem`<sup>Required</sup> <a name="ElasticFileSystem" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```go
func ElasticFileSystem() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `InternetGateway`<sup>Required</sup> <a name="InternetGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```go
func InternetGateway() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```go
func Lambda() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `NatGateway`<sup>Required</sup> <a name="NatGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```go
func NatGateway() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `VirtualPrivateGateway`<sup>Required</sup> <a name="VirtualPrivateGateway" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```go
func VirtualPrivateGateway() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `VpcLattice`<sup>Required</sup> <a name="VpcLattice" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```go
func VpcLattice() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `VpcPeering`<sup>Required</sup> <a name="VpcPeering" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```go
func VpcPeering() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusions">DataAwsccEc2VpcVpcEncryptionControlResourceExclusions</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2vpc"

dataawsccec2vpc.NewDataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Vpc.DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering">DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering</a>

---



