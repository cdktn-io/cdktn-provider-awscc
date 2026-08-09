# `dataAwsccEc2SecurityGroup` Submodule <a name="`dataAwsccEc2SecurityGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2SecurityGroup <a name="DataAwsccEc2SecurityGroup" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_security_group awscc_ec2_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.NewDataAwsccEc2SecurityGroup(scope Construct, id *string, config DataAwsccEc2SecurityGroupConfig) DataAwsccEc2SecurityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig">DataAwsccEc2SecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig">DataAwsccEc2SecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2SecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.DataAwsccEc2SecurityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.DataAwsccEc2SecurityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.DataAwsccEc2SecurityGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.DataAwsccEc2SecurityGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2SecurityGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2SecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2SecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2SecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.groupDescription">GroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.securityGroupEgress">SecurityGroupEgress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList">DataAwsccEc2SecurityGroupSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.securityGroupIngress">SecurityGroupIngress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList">DataAwsccEc2SecurityGroupSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList">DataAwsccEc2SecurityGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.groupDescription"></a>

```go
func GroupDescription() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `SecurityGroupEgress`<sup>Required</sup> <a name="SecurityGroupEgress" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.securityGroupEgress"></a>

```go
func SecurityGroupEgress() DataAwsccEc2SecurityGroupSecurityGroupEgressList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList">DataAwsccEc2SecurityGroupSecurityGroupEgressList</a>

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SecurityGroupIngress`<sup>Required</sup> <a name="SecurityGroupIngress" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.securityGroupIngress"></a>

```go
func SecurityGroupIngress() DataAwsccEc2SecurityGroupSecurityGroupIngressList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList">DataAwsccEc2SecurityGroupSecurityGroupIngressList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.tags"></a>

```go
func Tags() DataAwsccEc2SecurityGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList">DataAwsccEc2SecurityGroupTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2SecurityGroupConfig <a name="DataAwsccEc2SecurityGroupConfig" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

&dataawsccec2securitygroup.DataAwsccEc2SecurityGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_security_group#id DataAwsccEc2SecurityGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2SecurityGroupSecurityGroupEgress <a name="DataAwsccEc2SecurityGroupSecurityGroupEgress" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

&dataawsccec2securitygroup.DataAwsccEc2SecurityGroupSecurityGroupEgress {

}
```


### DataAwsccEc2SecurityGroupSecurityGroupIngress <a name="DataAwsccEc2SecurityGroupSecurityGroupIngress" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

&dataawsccec2securitygroup.DataAwsccEc2SecurityGroupSecurityGroupIngress {

}
```


### DataAwsccEc2SecurityGroupTags <a name="DataAwsccEc2SecurityGroupTags" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

&dataawsccec2securitygroup.DataAwsccEc2SecurityGroupTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2SecurityGroupSecurityGroupEgressList <a name="DataAwsccEc2SecurityGroupSecurityGroupEgressList" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.NewDataAwsccEc2SecurityGroupSecurityGroupEgressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2SecurityGroupSecurityGroupEgressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.get"></a>

```go
func Get(index *f64) DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference <a name="DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.NewDataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp">CidrIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId">DestinationSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgress">DataAwsccEc2SecurityGroupSecurityGroupEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp"></a>

```go
func CidrIp() *string
```

- *Type:* *string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6"></a>

```go
func CidrIpv6() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationPrefixListId`<sup>Required</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId"></a>

```go
func DestinationPrefixListId() *string
```

- *Type:* *string

---

##### `DestinationSecurityGroupId`<sup>Required</sup> <a name="DestinationSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId"></a>

```go
func DestinationSecurityGroupId() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2SecurityGroupSecurityGroupEgress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupEgress">DataAwsccEc2SecurityGroupSecurityGroupEgress</a>

---


### DataAwsccEc2SecurityGroupSecurityGroupIngressList <a name="DataAwsccEc2SecurityGroupSecurityGroupIngressList" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.NewDataAwsccEc2SecurityGroupSecurityGroupIngressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2SecurityGroupSecurityGroupIngressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.get"></a>

```go
func Get(index *f64) DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference <a name="DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.NewDataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp">CidrIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId">SourcePrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName">SourceSecurityGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId">SourceSecurityGroupOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngress">DataAwsccEc2SecurityGroupSecurityGroupIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp"></a>

```go
func CidrIp() *string
```

- *Type:* *string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6"></a>

```go
func CidrIpv6() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `SourcePrefixListId`<sup>Required</sup> <a name="SourcePrefixListId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId"></a>

```go
func SourcePrefixListId() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupId`<sup>Required</sup> <a name="SourceSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId"></a>

```go
func SourceSecurityGroupId() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupName`<sup>Required</sup> <a name="SourceSecurityGroupName" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName"></a>

```go
func SourceSecurityGroupName() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupOwnerId`<sup>Required</sup> <a name="SourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId"></a>

```go
func SourceSecurityGroupOwnerId() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2SecurityGroupSecurityGroupIngress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupSecurityGroupIngress">DataAwsccEc2SecurityGroupSecurityGroupIngress</a>

---


### DataAwsccEc2SecurityGroupTagsList <a name="DataAwsccEc2SecurityGroupTagsList" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.NewDataAwsccEc2SecurityGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2SecurityGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2SecurityGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2SecurityGroupTagsOutputReference <a name="DataAwsccEc2SecurityGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2securitygroup"

dataawsccec2securitygroup.NewDataAwsccEc2SecurityGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2SecurityGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTags">DataAwsccEc2SecurityGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2SecurityGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SecurityGroup.DataAwsccEc2SecurityGroupTags">DataAwsccEc2SecurityGroupTags</a>

---



