# `dataAwsccEc2TransitGatewayPolicyTableEntry` Submodule <a name="`dataAwsccEc2TransitGatewayPolicyTableEntry` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayPolicyTableEntry <a name="DataAwsccEc2TransitGatewayPolicyTableEntry" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_policy_table_entry awscc_ec2_transit_gateway_policy_table_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

dataawsccec2transitgatewaypolicytableentry.NewDataAwsccEc2TransitGatewayPolicyTableEntry(scope Construct, id *string, config DataAwsccEc2TransitGatewayPolicyTableEntryConfig) DataAwsccEc2TransitGatewayPolicyTableEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig">DataAwsccEc2TransitGatewayPolicyTableEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig">DataAwsccEc2TransitGatewayPolicyTableEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

dataawsccec2transitgatewaypolicytableentry.DataAwsccEc2TransitGatewayPolicyTableEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

dataawsccec2transitgatewaypolicytableentry.DataAwsccEc2TransitGatewayPolicyTableEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

dataawsccec2transitgatewaypolicytableentry.DataAwsccEc2TransitGatewayPolicyTableEntry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

dataawsccec2transitgatewaypolicytableentry.DataAwsccEc2TransitGatewayPolicyTableEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayPolicyTableEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2TransitGatewayPolicyTableEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_policy_table_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayPolicyTableEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRule">PolicyRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRuleNumber">PolicyRuleNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.targetRouteTableId">TargetRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableId">TransitGatewayPolicyTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PolicyRule`<sup>Required</sup> <a name="PolicyRule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRule"></a>

```go
func PolicyRule() DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference</a>

---

##### `PolicyRuleNumber`<sup>Required</sup> <a name="PolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.policyRuleNumber"></a>

```go
func PolicyRuleNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetRouteTableId`<sup>Required</sup> <a name="TargetRouteTableId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.targetRouteTableId"></a>

```go
func TargetRouteTableId() *string
```

- *Type:* *string

---

##### `TransitGatewayPolicyTableId`<sup>Required</sup> <a name="TransitGatewayPolicyTableId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableId"></a>

```go
func TransitGatewayPolicyTableId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayPolicyTableEntryConfig <a name="DataAwsccEc2TransitGatewayPolicyTableEntryConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

&dataawsccec2transitgatewaypolicytableentry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_policy_table_entry#id DataAwsccEc2TransitGatewayPolicyTableEntry#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule <a name="DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

&dataawsccec2transitgatewaypolicytableentry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference <a name="DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2transitgatewaypolicytableentry"

dataawsccec2transitgatewaypolicytableentry.NewDataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlock"></a>

```go
func DestinationCidrBlock() *string
```

- *Type:* *string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlock"></a>

```go
func SourceCidrBlock() *string
```

- *Type:* *string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTableEntry.DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule">DataAwsccEc2TransitGatewayPolicyTableEntryPolicyRule</a>

---



