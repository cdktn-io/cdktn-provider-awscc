# `dataAwsccEc2Ec2Fleet` Submodule <a name="`dataAwsccEc2Ec2Fleet` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2Ec2Fleet <a name="DataAwsccEc2Ec2Fleet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ec2_fleet awscc_ec2_ec2_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet(scope: Construct, id: string, config: DataAwsccEc2Ec2FleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig">DataAwsccEc2Ec2FleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig">DataAwsccEc2Ec2FleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2Ec2Fleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isConstruct"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformElement"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2Ec2Fleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2Ec2Fleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2Ec2Fleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ec2_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2Ec2Fleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.launchTemplateConfigs">launchTemplateConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.onDemandOptions">onDemandOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.reservedCapacityOptions">reservedCapacityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference">DataAwsccEc2Ec2FleetSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList">DataAwsccEc2Ec2FleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.targetCapacitySpecification">targetCapacitySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference">DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validFrom">validFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validUntil">validUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `excessCapacityTerminationPolicy`<sup>Required</sup> <a name="excessCapacityTerminationPolicy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.excessCapacityTerminationPolicy"></a>

```typescript
public readonly excessCapacityTerminationPolicy: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `launchTemplateConfigs`<sup>Required</sup> <a name="launchTemplateConfigs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.launchTemplateConfigs"></a>

```typescript
public readonly launchTemplateConfigs: DataAwsccEc2Ec2FleetLaunchTemplateConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsList</a>

---

##### `onDemandOptions`<sup>Required</sup> <a name="onDemandOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.onDemandOptions"></a>

```typescript
public readonly onDemandOptions: DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference</a>

---

##### `replaceUnhealthyInstances`<sup>Required</sup> <a name="replaceUnhealthyInstances" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.replaceUnhealthyInstances"></a>

```typescript
public readonly replaceUnhealthyInstances: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `reservedCapacityOptions`<sup>Required</sup> <a name="reservedCapacityOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.reservedCapacityOptions"></a>

```typescript
public readonly reservedCapacityOptions: DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference</a>

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.spotOptions"></a>

```typescript
public readonly spotOptions: DataAwsccEc2Ec2FleetSpotOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference">DataAwsccEc2Ec2FleetSpotOptionsOutputReference</a>

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: DataAwsccEc2Ec2FleetTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList">DataAwsccEc2Ec2FleetTagSpecificationsList</a>

---

##### `targetCapacitySpecification`<sup>Required</sup> <a name="targetCapacitySpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.targetCapacitySpecification"></a>

```typescript
public readonly targetCapacitySpecification: DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference">DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference</a>

---

##### `terminateInstancesWithExpiration`<sup>Required</sup> <a name="terminateInstancesWithExpiration" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.terminateInstancesWithExpiration"></a>

```typescript
public readonly terminateInstancesWithExpiration: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validFrom"></a>

```typescript
public readonly validFrom: string;
```

- *Type:* string

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2Fleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2Ec2FleetConfig <a name="DataAwsccEc2Ec2FleetConfig" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetConfig: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_ec2_fleet#id DataAwsccEc2Ec2Fleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2Ec2FleetLaunchTemplateConfigs <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigs: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses = { ... }
```


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement = { ... }
```


### DataAwsccEc2Ec2FleetOnDemandOptions <a name="DataAwsccEc2Ec2FleetOnDemandOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetOnDemandOptions: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions = { ... }
```


### DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions <a name="DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions = { ... }
```


### DataAwsccEc2Ec2FleetReservedCapacityOptions <a name="DataAwsccEc2Ec2FleetReservedCapacityOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetReservedCapacityOptions: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions = { ... }
```


### DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget = { ... }
```


### DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions = { ... }
```


### DataAwsccEc2Ec2FleetSpotOptions <a name="DataAwsccEc2Ec2FleetSpotOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetSpotOptions: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions = { ... }
```


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies = { ... }
```


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance = { ... }
```


### DataAwsccEc2Ec2FleetTagSpecifications <a name="DataAwsccEc2Ec2FleetTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetTagSpecifications: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications = { ... }
```


### DataAwsccEc2Ec2FleetTagSpecificationsTags <a name="DataAwsccEc2Ec2FleetTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetTagSpecificationsTags: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags = { ... }
```


### DataAwsccEc2Ec2FleetTargetCapacitySpecification <a name="DataAwsccEc2Ec2FleetTargetCapacitySpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

const dataAwsccEc2Ec2FleetTargetCapacitySpecification: dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserData">launchTemplateSpecificationUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `launchTemplateSpecificationUserData`<sup>Required</sup> <a name="launchTemplateSpecificationUserData" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.launchTemplateSpecificationUserData"></a>

```typescript
public readonly launchTemplateSpecificationUserData: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs">DataAwsccEc2Ec2FleetLaunchTemplateConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigs">DataAwsccEc2Ec2FleetLaunchTemplateConfigs</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references">references</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references"></a>

```typescript
public readonly references: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu">cpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB">acceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors">baselinePerformanceFactors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">maxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu">memoryGiBPerVCpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiB">memoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps">networkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransit">requireEncryptionInTransit</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCount">vCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```typescript
public readonly acceleratorManufacturers: string[];
```

- *Type:* string[]

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```typescript
public readonly acceleratorNames: string[];
```

- *Type:* string[]

---

##### `acceleratorTotalMemoryMiB`<sup>Required</sup> <a name="acceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB"></a>

```typescript
public readonly acceleratorTotalMemoryMiB: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```typescript
public readonly acceleratorTypes: string[];
```

- *Type:* string[]

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```typescript
public readonly bareMetal: string;
```

- *Type:* string

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```typescript
public readonly baselineEbsBandwidthMbps: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `baselinePerformanceFactors`<sup>Required</sup> <a name="baselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.baselinePerformanceFactors"></a>

```typescript
public readonly baselinePerformanceFactors: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference</a>

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```typescript
public readonly burstablePerformance: string;
```

- *Type:* string

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```typescript
public readonly cpuManufacturers: string[];
```

- *Type:* string[]

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```typescript
public readonly excludedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```typescript
public readonly instanceGenerations: string[];
```

- *Type:* string[]

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```typescript
public readonly localStorage: string;
```

- *Type:* string

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```typescript
public readonly localStorageTypes: string[];
```

- *Type:* string[]

---

##### `maxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="maxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```typescript
public readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice: number;
```

- *Type:* number

---

##### `memoryGiBPerVCpu`<sup>Required</sup> <a name="memoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryGiBPerVCpu"></a>

```typescript
public readonly memoryGiBPerVCpu: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference</a>

---

##### `memoryMiB`<sup>Required</sup> <a name="memoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.memoryMiB"></a>

```typescript
public readonly memoryMiB: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference</a>

---

##### `networkBandwidthGbps`<sup>Required</sup> <a name="networkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```typescript
public readonly networkBandwidthGbps: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```typescript
public readonly networkInterfaceCount: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly onDemandMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `requireEncryptionInTransit`<sup>Required</sup> <a name="requireEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireEncryptionInTransit"></a>

```typescript
public readonly requireEncryptionInTransit: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```typescript
public readonly requireHibernateSupport: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly spotMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```typescript
public readonly totalLocalStorageGb: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vCpuCount`<sup>Required</sup> <a name="vCpuCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.vCpuCount"></a>

```typescript
public readonly vCpuCount: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceType">interfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.interfaceType"></a>

```typescript
public readonly interfaceType: string;
```

- *Type:* string

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList</a>

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```typescript
public readonly networkCardIndex: number;
```

- *Type:* number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList</a>

---

##### `secondaryPrivateIpAddressCount`<sup>Required</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```typescript
public readonly secondaryPrivateIpAddressCount: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPrice">maxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList</a>

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference</a>

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `maxPrice`<sup>Required</sup> <a name="maxPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.maxPrice"></a>

```typescript
public readonly maxPrice: string;
```

- *Type:* string

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.placement"></a>

```typescript
public readonly placement: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides</a>

---


### DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference <a name="DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinity">affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumber">partitionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomain">spreadDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.affinity"></a>

```typescript
public readonly affinity: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

---

##### `partitionNumber`<sup>Required</sup> <a name="partitionNumber" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.partitionNumber"></a>

```typescript
public readonly partitionNumber: number;
```

- *Type:* number

---

##### `spreadDomain`<sup>Required</sup> <a name="spreadDomain" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.spreadDomain"></a>

```typescript
public readonly spreadDomain: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement">DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement</a>

---


### DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference <a name="DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategy">usageStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usageStrategy`<sup>Required</sup> <a name="usageStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.usageStrategy"></a>

```typescript
public readonly usageStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions</a>

---


### DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference <a name="DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptions">capacityReservationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPrice">maxTotalPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZone">singleAvailabilityZone</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceType">singleInstanceType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions">DataAwsccEc2Ec2FleetOnDemandOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `capacityReservationOptions`<sup>Required</sup> <a name="capacityReservationOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.capacityReservationOptions"></a>

```typescript
public readonly capacityReservationOptions: DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference">DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference</a>

---

##### `maxTotalPrice`<sup>Required</sup> <a name="maxTotalPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.maxTotalPrice"></a>

```typescript
public readonly maxTotalPrice: string;
```

- *Type:* string

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: number;
```

- *Type:* number

---

##### `singleAvailabilityZone`<sup>Required</sup> <a name="singleAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleAvailabilityZone"></a>

```typescript
public readonly singleAvailabilityZone: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `singleInstanceType`<sup>Required</sup> <a name="singleInstanceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.singleInstanceType"></a>

```typescript
public readonly singleInstanceType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetOnDemandOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetOnDemandOptions">DataAwsccEc2Ec2FleetOnDemandOptions</a>

---


### DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationIds">capacityReservationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns">capacityReservationResourceGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationIds`<sup>Required</sup> <a name="capacityReservationIds" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationIds"></a>

```typescript
public readonly capacityReservationIds: string[];
```

- *Type:* string[]

---

##### `capacityReservationResourceGroupArns`<sup>Required</sup> <a name="capacityReservationResourceGroupArns" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArns"></a>

```typescript
public readonly capacityReservationResourceGroupArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTarget</a>

---


### DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypes">reservationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservedCapacityFallbackOptions">reservedCapacityFallbackOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions">DataAwsccEc2Ec2FleetReservedCapacityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsCapacityReservationTargetOutputReference</a>

---

##### `reservationTypes`<sup>Required</sup> <a name="reservationTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservationTypes"></a>

```typescript
public readonly reservationTypes: string[];
```

- *Type:* string[]

---

##### `reservedCapacityFallbackOptions`<sup>Required</sup> <a name="reservedCapacityFallbackOptions" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.reservedCapacityFallbackOptions"></a>

```typescript
public readonly reservedCapacityFallbackOptions: DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetReservedCapacityOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptions">DataAwsccEc2Ec2FleetReservedCapacityOptions</a>

---


### DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference <a name="DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.marketTypes">marketTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `marketTypes`<sup>Required</sup> <a name="marketTypes" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.marketTypes"></a>

```typescript
public readonly marketTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions">DataAwsccEc2Ec2FleetReservedCapacityOptionsReservedCapacityFallbackOptions</a>

---


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">replacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelay">terminationDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replacementStrategy`<sup>Required</sup> <a name="replacementStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```typescript
public readonly replacementStrategy: string;
```

- *Type:* string

---

##### `terminationDelay`<sup>Required</sup> <a name="terminationDelay" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.terminationDelay"></a>

```typescript
public readonly terminationDelay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---


### DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference <a name="DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance">capacityRebalance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityRebalance`<sup>Required</sup> <a name="capacityRebalance" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies</a>

---


### DataAwsccEc2Ec2FleetSpotOptionsOutputReference <a name="DataAwsccEc2Ec2FleetSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies">maintenanceStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maxTotalPrice">maxTotalPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacity">minTargetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZone">singleAvailabilityZone</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleInstanceType">singleInstanceType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions">DataAwsccEc2Ec2FleetSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```typescript
public readonly instanceInterruptionBehavior: string;
```

- *Type:* string

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount"></a>

```typescript
public readonly instancePoolsToUseCount: number;
```

- *Type:* number

---

##### `maintenanceStrategies`<sup>Required</sup> <a name="maintenanceStrategies" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies"></a>

```typescript
public readonly maintenanceStrategies: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a>

---

##### `maxTotalPrice`<sup>Required</sup> <a name="maxTotalPrice" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.maxTotalPrice"></a>

```typescript
public readonly maxTotalPrice: string;
```

- *Type:* string

---

##### `minTargetCapacity`<sup>Required</sup> <a name="minTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.minTargetCapacity"></a>

```typescript
public readonly minTargetCapacity: number;
```

- *Type:* number

---

##### `singleAvailabilityZone`<sup>Required</sup> <a name="singleAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleAvailabilityZone"></a>

```typescript
public readonly singleAvailabilityZone: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `singleInstanceType`<sup>Required</sup> <a name="singleInstanceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.singleInstanceType"></a>

```typescript
public readonly singleInstanceType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetSpotOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetSpotOptions">DataAwsccEc2Ec2FleetSpotOptions</a>

---


### DataAwsccEc2Ec2FleetTagSpecificationsList <a name="DataAwsccEc2Ec2FleetTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetTagSpecificationsOutputReference <a name="DataAwsccEc2Ec2FleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList">DataAwsccEc2Ec2FleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications">DataAwsccEc2Ec2FleetTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2Ec2FleetTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList">DataAwsccEc2Ec2FleetTagSpecificationsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetTagSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecifications">DataAwsccEc2Ec2FleetTagSpecifications</a>

---


### DataAwsccEc2Ec2FleetTagSpecificationsTagsList <a name="DataAwsccEc2Ec2FleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference <a name="DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags">DataAwsccEc2Ec2FleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetTagSpecificationsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTagSpecificationsTags">DataAwsccEc2Ec2FleetTagSpecificationsTags</a>

---


### DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference <a name="DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ec2Fleet } from '@cdktn/provider-awscc'

new dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType">defaultTargetCapacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity">spotTargetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType">targetCapacityUnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity">totalTargetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification">DataAwsccEc2Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultTargetCapacityType`<sup>Required</sup> <a name="defaultTargetCapacityType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType"></a>

```typescript
public readonly defaultTargetCapacityType: string;
```

- *Type:* string

---

##### `onDemandTargetCapacity`<sup>Required</sup> <a name="onDemandTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity"></a>

```typescript
public readonly onDemandTargetCapacity: number;
```

- *Type:* number

---

##### `spotTargetCapacity`<sup>Required</sup> <a name="spotTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity"></a>

```typescript
public readonly spotTargetCapacity: number;
```

- *Type:* number

---

##### `targetCapacityUnitType`<sup>Required</sup> <a name="targetCapacityUnitType" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType"></a>

```typescript
public readonly targetCapacityUnitType: string;
```

- *Type:* string

---

##### `totalTargetCapacity`<sup>Required</sup> <a name="totalTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity"></a>

```typescript
public readonly totalTargetCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2Ec2FleetTargetCapacitySpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ec2Fleet.DataAwsccEc2Ec2FleetTargetCapacitySpecification">DataAwsccEc2Ec2FleetTargetCapacitySpecification</a>

---



