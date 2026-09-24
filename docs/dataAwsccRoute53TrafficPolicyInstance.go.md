# `dataAwsccRoute53TrafficPolicyInstance` Submodule <a name="`dataAwsccRoute53TrafficPolicyInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53TrafficPolicyInstance <a name="DataAwsccRoute53TrafficPolicyInstance" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/route53_traffic_policy_instance awscc_route53_traffic_policy_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53trafficpolicyinstance"

dataawsccroute53trafficpolicyinstance.NewDataAwsccRoute53TrafficPolicyInstance(scope Construct, id *string, config DataAwsccRoute53TrafficPolicyInstanceConfig) DataAwsccRoute53TrafficPolicyInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig">DataAwsccRoute53TrafficPolicyInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig">DataAwsccRoute53TrafficPolicyInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53TrafficPolicyInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53trafficpolicyinstance"

dataawsccroute53trafficpolicyinstance.DataAwsccRoute53TrafficPolicyInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53trafficpolicyinstance"

dataawsccroute53trafficpolicyinstance.DataAwsccRoute53TrafficPolicyInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53trafficpolicyinstance"

dataawsccroute53trafficpolicyinstance.DataAwsccRoute53TrafficPolicyInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53trafficpolicyinstance"

dataawsccroute53trafficpolicyinstance.DataAwsccRoute53TrafficPolicyInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53TrafficPolicyInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53TrafficPolicyInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53TrafficPolicyInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/route53_traffic_policy_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53TrafficPolicyInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyId">TrafficPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyInstanceId">TrafficPolicyInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyType">TrafficPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyVersion">TrafficPolicyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TrafficPolicyId`<sup>Required</sup> <a name="TrafficPolicyId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyId"></a>

```go
func TrafficPolicyId() *string
```

- *Type:* *string

---

##### `TrafficPolicyInstanceId`<sup>Required</sup> <a name="TrafficPolicyInstanceId" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyInstanceId"></a>

```go
func TrafficPolicyInstanceId() *string
```

- *Type:* *string

---

##### `TrafficPolicyType`<sup>Required</sup> <a name="TrafficPolicyType" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyType"></a>

```go
func TrafficPolicyType() *string
```

- *Type:* *string

---

##### `TrafficPolicyVersion`<sup>Required</sup> <a name="TrafficPolicyVersion" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.trafficPolicyVersion"></a>

```go
func TrafficPolicyVersion() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53TrafficPolicyInstanceConfig <a name="DataAwsccRoute53TrafficPolicyInstanceConfig" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53trafficpolicyinstance"

&dataawsccroute53trafficpolicyinstance.DataAwsccRoute53TrafficPolicyInstanceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53TrafficPolicyInstance.DataAwsccRoute53TrafficPolicyInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/route53_traffic_policy_instance#id DataAwsccRoute53TrafficPolicyInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



