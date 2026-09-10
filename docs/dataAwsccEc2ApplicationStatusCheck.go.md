# `dataAwsccEc2ApplicationStatusCheck` Submodule <a name="`dataAwsccEc2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2ApplicationStatusCheck <a name="DataAwsccEc2ApplicationStatusCheck" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheck(scope Construct, id *string, config DataAwsccEc2ApplicationStatusCheckConfig) DataAwsccEc2ApplicationStatusCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig">DataAwsccEc2ApplicationStatusCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig">DataAwsccEc2ApplicationStatusCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheck_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2ApplicationStatusCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.applicationStatusCheckId">ApplicationStatusCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.healthCheckPaths">HealthCheckPaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.initializationGracePeriodSeconds">InitializationGracePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipScope">IpScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList">DataAwsccEc2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `ApplicationStatusCheckId`<sup>Required</sup> <a name="ApplicationStatusCheckId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```go
func ApplicationStatusCheckId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `HealthCheckPaths`<sup>Required</sup> <a name="HealthCheckPaths" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.healthCheckPaths"></a>

```go
func HealthCheckPaths() DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `InitializationGracePeriodSeconds`<sup>Required</sup> <a name="InitializationGracePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```go
func InitializationGracePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `IpScope`<sup>Required</sup> <a name="IpScope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipScope"></a>

```go
func IpScope() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `StatusCodeMatcher`<sup>Required</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```go
func StatusCodeMatcher() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tags"></a>

```go
func Tags() DataAwsccEc2ApplicationStatusCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList">DataAwsccEc2ApplicationStatusCheckTagsList</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2ApplicationStatusCheckConfig <a name="DataAwsccEc2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

&dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheckConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#id DataAwsccEc2ApplicationStatusCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2ApplicationStatusCheckHealthCheckPaths <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

&dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths {

}
```


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

&dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations {

}
```


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

&dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource {

}
```


### DataAwsccEc2ApplicationStatusCheckTags <a name="DataAwsccEc2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

&dataawsccec2applicationstatuscheck.DataAwsccEc2ApplicationStatusCheckTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations</a>

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheckHealthCheckPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths">DataAwsccEc2ApplicationStatusCheckHealthCheckPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```go
func Source() DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2ApplicationStatusCheckHealthCheckPaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths">DataAwsccEc2ApplicationStatusCheckHealthCheckPaths</a>

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource</a>

---


### DataAwsccEc2ApplicationStatusCheckTagsList <a name="DataAwsccEc2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheckTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2ApplicationStatusCheckTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2ApplicationStatusCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2ApplicationStatusCheckTagsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2applicationstatuscheck"

dataawsccec2applicationstatuscheck.NewDataAwsccEc2ApplicationStatusCheckTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2ApplicationStatusCheckTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags">DataAwsccEc2ApplicationStatusCheckTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2ApplicationStatusCheckTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags">DataAwsccEc2ApplicationStatusCheckTags</a>

---



