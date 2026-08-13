# `dataAwsccBatchSchedulingPolicy` Submodule <a name="`dataAwsccBatchSchedulingPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBatchSchedulingPolicy <a name="DataAwsccBatchSchedulingPolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/batch_scheduling_policy awscc_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.NewDataAwsccBatchSchedulingPolicy(scope Construct, id *string, config DataAwsccBatchSchedulingPolicyConfig) DataAwsccBatchSchedulingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig">DataAwsccBatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig">DataAwsccBatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBatchSchedulingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fairsharePolicy">FairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference">DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.quotaSharePolicy">QuotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference">DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FairsharePolicy`<sup>Required</sup> <a name="FairsharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fairsharePolicy"></a>

```go
func FairsharePolicy() DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference">DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QuotaSharePolicy`<sup>Required</sup> <a name="QuotaSharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.quotaSharePolicy"></a>

```go
func QuotaSharePolicy() DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference">DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBatchSchedulingPolicyConfig <a name="DataAwsccBatchSchedulingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

&dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/batch_scheduling_policy#id DataAwsccBatchSchedulingPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBatchSchedulingPolicyFairsharePolicy <a name="DataAwsccBatchSchedulingPolicyFairsharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

&dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy {

}
```


### DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

&dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution {

}
```


### DataAwsccBatchSchedulingPolicyQuotaSharePolicy <a name="DataAwsccBatchSchedulingPolicyQuotaSharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

&dataawsccbatchschedulingpolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.NewDataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation">ComputeReservation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution">ShareDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy">DataAwsccBatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeReservation`<sup>Required</sup> <a name="ComputeReservation" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation"></a>

```go
func ComputeReservation() *f64
```

- *Type:* *f64

---

##### `ShareDecaySeconds`<sup>Required</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds"></a>

```go
func ShareDecaySeconds() *f64
```

- *Type:* *f64

---

##### `ShareDistribution`<sup>Required</sup> <a name="ShareDistribution" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution"></a>

```go
func ShareDistribution() DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBatchSchedulingPolicyFairsharePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy">DataAwsccBatchSchedulingPolicyFairsharePolicy</a>

---


### DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.NewDataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.get"></a>

```go
func Get(index *f64) DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.NewDataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier">ShareIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor">WeightFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```go
func ShareIdentifier() *string
```

- *Type:* *string

---

##### `WeightFactor`<sup>Required</sup> <a name="WeightFactor" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```go
func WeightFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution</a>

---


### DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference <a name="DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbatchschedulingpolicy"

dataawsccbatchschedulingpolicy.NewDataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy">IdleResourceAssignmentStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy">DataAwsccBatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleResourceAssignmentStrategy`<sup>Required</sup> <a name="IdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy"></a>

```go
func IdleResourceAssignmentStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBatchSchedulingPolicyQuotaSharePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy">DataAwsccBatchSchedulingPolicyQuotaSharePolicy</a>

---



