# `dataAwsccEc2IpamPool` Submodule <a name="`dataAwsccEc2IpamPool` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamPool <a name="DataAwsccEc2IpamPool" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_pool awscc_ec2_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPool(scope: Construct, id: string, config: DataAwsccEc2IpamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig">DataAwsccEc2IpamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig">DataAwsccEc2IpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isConstruct"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformElement"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2IpamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2IpamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2IpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationResourceTags">allocationResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList">DataAwsccEc2IpamPoolAllocationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.autoImport">autoImport</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.awsService">awsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamArn">ipamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamScopeArn">ipamScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.poolDepth">poolDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.provisionedCidrs">provisionedCidrs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList">DataAwsccEc2IpamPoolProvisionedCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.publicIpSource">publicIpSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.sourceResource">sourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference">DataAwsccEc2IpamPoolSourceResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList">DataAwsccEc2IpamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `allocationDefaultNetmaskLength`<sup>Required</sup> <a name="allocationDefaultNetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMaxNetmaskLength`<sup>Required</sup> <a name="allocationMaxNetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMinNetmaskLength`<sup>Required</sup> <a name="allocationMinNetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

---

##### `allocationResourceTags`<sup>Required</sup> <a name="allocationResourceTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: DataAwsccEc2IpamPoolAllocationResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList">DataAwsccEc2IpamPoolAllocationResourceTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoImport`<sup>Required</sup> <a name="autoImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.autoImport"></a>

```typescript
public readonly autoImport: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.awsService"></a>

```typescript
public readonly awsService: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `ipamScopeArn`<sup>Required</sup> <a name="ipamScopeArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamScopeArn"></a>

```typescript
public readonly ipamScopeArn: string;
```

- *Type:* string

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.ipamScopeType"></a>

```typescript
public readonly ipamScopeType: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.poolDepth"></a>

```typescript
public readonly poolDepth: number;
```

- *Type:* number

---

##### `provisionedCidrs`<sup>Required</sup> <a name="provisionedCidrs" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.provisionedCidrs"></a>

```typescript
public readonly provisionedCidrs: DataAwsccEc2IpamPoolProvisionedCidrsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList">DataAwsccEc2IpamPoolProvisionedCidrsList</a>

---

##### `publicIpSource`<sup>Required</sup> <a name="publicIpSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.publicIpSource"></a>

```typescript
public readonly publicIpSource: string;
```

- *Type:* string

---

##### `publiclyAdvertisable`<sup>Required</sup> <a name="publiclyAdvertisable" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.publiclyAdvertisable"></a>

```typescript
public readonly publiclyAdvertisable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sourceIpamPoolId`<sup>Required</sup> <a name="sourceIpamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

---

##### `sourceResource`<sup>Required</sup> <a name="sourceResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.sourceResource"></a>

```typescript
public readonly sourceResource: DataAwsccEc2IpamPoolSourceResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference">DataAwsccEc2IpamPoolSourceResourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2IpamPoolTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList">DataAwsccEc2IpamPoolTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamPoolAllocationResourceTags <a name="DataAwsccEc2IpamPoolAllocationResourceTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTags.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPoolAllocationResourceTags: dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTags = { ... }
```


### DataAwsccEc2IpamPoolConfig <a name="DataAwsccEc2IpamPoolConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPoolConfig: dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_pool#id DataAwsccEc2IpamPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamPoolProvisionedCidrs <a name="DataAwsccEc2IpamPoolProvisionedCidrs" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrs.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPoolProvisionedCidrs: dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrs = { ... }
```


### DataAwsccEc2IpamPoolSourceResource <a name="DataAwsccEc2IpamPoolSourceResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResource.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPoolSourceResource: dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResource = { ... }
```


### DataAwsccEc2IpamPoolTags <a name="DataAwsccEc2IpamPoolTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTags.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPoolTags: dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamPoolAllocationResourceTagsList <a name="DataAwsccEc2IpamPoolAllocationResourceTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference <a name="DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTags">DataAwsccEc2IpamPoolAllocationResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPoolAllocationResourceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolAllocationResourceTags">DataAwsccEc2IpamPoolAllocationResourceTags</a>

---


### DataAwsccEc2IpamPoolProvisionedCidrsList <a name="DataAwsccEc2IpamPoolProvisionedCidrsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamPoolProvisionedCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamPoolProvisionedCidrsOutputReference <a name="DataAwsccEc2IpamPoolProvisionedCidrsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrs">DataAwsccEc2IpamPoolProvisionedCidrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPoolProvisionedCidrs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolProvisionedCidrs">DataAwsccEc2IpamPoolProvisionedCidrs</a>

---


### DataAwsccEc2IpamPoolSourceResourceOutputReference <a name="DataAwsccEc2IpamPoolSourceResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResource">DataAwsccEc2IpamPoolSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPoolSourceResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolSourceResource">DataAwsccEc2IpamPoolSourceResource</a>

---


### DataAwsccEc2IpamPoolTagsList <a name="DataAwsccEc2IpamPoolTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamPoolTagsOutputReference <a name="DataAwsccEc2IpamPoolTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPool } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTags">DataAwsccEc2IpamPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPoolTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPool.DataAwsccEc2IpamPoolTags">DataAwsccEc2IpamPoolTags</a>

---



