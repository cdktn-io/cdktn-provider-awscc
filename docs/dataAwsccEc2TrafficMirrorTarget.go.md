# `dataAwsccEc2TrafficMirrorTarget` Submodule <a name="`dataAwsccEc2TrafficMirrorTarget` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TrafficMirrorTarget <a name="DataAwsccEc2TrafficMirrorTarget" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_traffic_mirror_target awscc_ec2_traffic_mirror_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

dataawsccec2trafficmirrortarget.NewDataAwsccEc2TrafficMirrorTarget(scope Construct, id *string, config DataAwsccEc2TrafficMirrorTargetConfig) DataAwsccEc2TrafficMirrorTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig">DataAwsccEc2TrafficMirrorTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig">DataAwsccEc2TrafficMirrorTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TrafficMirrorTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

dataawsccec2trafficmirrortarget.DataAwsccEc2TrafficMirrorTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

dataawsccec2trafficmirrortarget.DataAwsccEc2TrafficMirrorTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

dataawsccec2trafficmirrortarget.DataAwsccEc2TrafficMirrorTarget_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

dataawsccec2trafficmirrortarget.DataAwsccEc2TrafficMirrorTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2TrafficMirrorTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2TrafficMirrorTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2TrafficMirrorTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_traffic_mirror_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TrafficMirrorTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId">GatewayLoadBalancerEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.networkLoadBalancerArn">NetworkLoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList">DataAwsccEc2TrafficMirrorTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.trafficMirrorTargetId">TrafficMirrorTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GatewayLoadBalancerEndpointId`<sup>Required</sup> <a name="GatewayLoadBalancerEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.gatewayLoadBalancerEndpointId"></a>

```go
func GatewayLoadBalancerEndpointId() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerArn`<sup>Required</sup> <a name="NetworkLoadBalancerArn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.networkLoadBalancerArn"></a>

```go
func NetworkLoadBalancerArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.tags"></a>

```go
func Tags() DataAwsccEc2TrafficMirrorTargetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList">DataAwsccEc2TrafficMirrorTargetTagsList</a>

---

##### `TrafficMirrorTargetId`<sup>Required</sup> <a name="TrafficMirrorTargetId" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.trafficMirrorTargetId"></a>

```go
func TrafficMirrorTargetId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TrafficMirrorTargetConfig <a name="DataAwsccEc2TrafficMirrorTargetConfig" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

&dataawsccec2trafficmirrortarget.DataAwsccEc2TrafficMirrorTargetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_traffic_mirror_target#id DataAwsccEc2TrafficMirrorTarget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TrafficMirrorTargetTags <a name="DataAwsccEc2TrafficMirrorTargetTags" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

&dataawsccec2trafficmirrortarget.DataAwsccEc2TrafficMirrorTargetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TrafficMirrorTargetTagsList <a name="DataAwsccEc2TrafficMirrorTargetTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

dataawsccec2trafficmirrortarget.NewDataAwsccEc2TrafficMirrorTargetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2TrafficMirrorTargetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2TrafficMirrorTargetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2TrafficMirrorTargetTagsOutputReference <a name="DataAwsccEc2TrafficMirrorTargetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2trafficmirrortarget"

dataawsccec2trafficmirrortarget.NewDataAwsccEc2TrafficMirrorTargetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2TrafficMirrorTargetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTags">DataAwsccEc2TrafficMirrorTargetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2TrafficMirrorTargetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TrafficMirrorTarget.DataAwsccEc2TrafficMirrorTargetTags">DataAwsccEc2TrafficMirrorTargetTags</a>

---



