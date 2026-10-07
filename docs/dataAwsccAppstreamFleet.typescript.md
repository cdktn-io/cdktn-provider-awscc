# `dataAwsccAppstreamFleet` Submodule <a name="`dataAwsccAppstreamFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppstreamFleet <a name="DataAwsccAppstreamFleet" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/appstream_fleet awscc_appstream_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleet(scope: Construct, id: string, config: DataAwsccAppstreamFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig">DataAwsccAppstreamFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig">DataAwsccAppstreamFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppstreamFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isConstruct"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformElement"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.generateConfigForImport"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppstreamFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppstreamFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppstreamFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/appstream_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppstreamFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.attributesToDelete">attributesToDelete</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.computeCapacity">computeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference">DataAwsccAppstreamFleetComputeCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.disableImdsv1">disableImdsv1</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference">DataAwsccAppstreamFleetDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.fleetType">fleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.imageArn">imageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.maxSessionsPerInstance">maxSessionsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference">DataAwsccAppstreamFleetRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.sessionScriptS3Location">sessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference">DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.streamView">streamView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList">DataAwsccAppstreamFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.usbDeviceFilterStrings">usbDeviceFilterStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference">DataAwsccAppstreamFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attributesToDelete`<sup>Required</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.attributesToDelete"></a>

```typescript
public readonly attributesToDelete: string[];
```

- *Type:* string[]

---

##### `computeCapacity`<sup>Required</sup> <a name="computeCapacity" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.computeCapacity"></a>

```typescript
public readonly computeCapacity: DataAwsccAppstreamFleetComputeCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference">DataAwsccAppstreamFleetComputeCapacityOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableImdsv1`<sup>Required</sup> <a name="disableImdsv1" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.disableImdsv1"></a>

```typescript
public readonly disableImdsv1: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.disconnectTimeoutInSeconds"></a>

```typescript
public readonly disconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainJoinInfo`<sup>Required</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.domainJoinInfo"></a>

```typescript
public readonly domainJoinInfo: DataAwsccAppstreamFleetDomainJoinInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference">DataAwsccAppstreamFleetDomainJoinInfoOutputReference</a>

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.enableDefaultInternetAccess"></a>

```typescript
public readonly enableDefaultInternetAccess: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.idleDisconnectTimeoutInSeconds"></a>

```typescript
public readonly idleDisconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `maxConcurrentSessions`<sup>Required</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.maxConcurrentSessions"></a>

```typescript
public readonly maxConcurrentSessions: number;
```

- *Type:* number

---

##### `maxSessionsPerInstance`<sup>Required</sup> <a name="maxSessionsPerInstance" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.maxSessionsPerInstance"></a>

```typescript
public readonly maxSessionsPerInstance: number;
```

- *Type:* number

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.maxUserDurationInSeconds"></a>

```typescript
public readonly maxUserDurationInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `rootVolumeConfig`<sup>Required</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.rootVolumeConfig"></a>

```typescript
public readonly rootVolumeConfig: DataAwsccAppstreamFleetRootVolumeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference">DataAwsccAppstreamFleetRootVolumeConfigOutputReference</a>

---

##### `sessionScriptS3Location`<sup>Required</sup> <a name="sessionScriptS3Location" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.sessionScriptS3Location"></a>

```typescript
public readonly sessionScriptS3Location: DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference">DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference</a>

---

##### `streamView`<sup>Required</sup> <a name="streamView" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.streamView"></a>

```typescript
public readonly streamView: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.tags"></a>

```typescript
public readonly tags: DataAwsccAppstreamFleetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList">DataAwsccAppstreamFleetTagsList</a>

---

##### `usbDeviceFilterStrings`<sup>Required</sup> <a name="usbDeviceFilterStrings" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.usbDeviceFilterStrings"></a>

```typescript
public readonly usbDeviceFilterStrings: string[];
```

- *Type:* string[]

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccAppstreamFleetVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference">DataAwsccAppstreamFleetVpcConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppstreamFleetComputeCapacity <a name="DataAwsccAppstreamFleetComputeCapacity" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacity.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

const dataAwsccAppstreamFleetComputeCapacity: dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacity = { ... }
```


### DataAwsccAppstreamFleetConfig <a name="DataAwsccAppstreamFleetConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

const dataAwsccAppstreamFleetConfig: dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/appstream_fleet#id DataAwsccAppstreamFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppstreamFleetDomainJoinInfo <a name="DataAwsccAppstreamFleetDomainJoinInfo" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfo.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

const dataAwsccAppstreamFleetDomainJoinInfo: dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfo = { ... }
```


### DataAwsccAppstreamFleetRootVolumeConfig <a name="DataAwsccAppstreamFleetRootVolumeConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfig.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

const dataAwsccAppstreamFleetRootVolumeConfig: dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfig = { ... }
```


### DataAwsccAppstreamFleetSessionScriptS3Location <a name="DataAwsccAppstreamFleetSessionScriptS3Location" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3Location.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

const dataAwsccAppstreamFleetSessionScriptS3Location: dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3Location = { ... }
```


### DataAwsccAppstreamFleetTags <a name="DataAwsccAppstreamFleetTags" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTags.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

const dataAwsccAppstreamFleetTags: dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTags = { ... }
```


### DataAwsccAppstreamFleetVpcConfig <a name="DataAwsccAppstreamFleetVpcConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfig.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

const dataAwsccAppstreamFleetVpcConfig: dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppstreamFleetComputeCapacityOutputReference <a name="DataAwsccAppstreamFleetComputeCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.desiredInstances">desiredInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.desiredSessions">desiredSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacity">DataAwsccAppstreamFleetComputeCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredInstances`<sup>Required</sup> <a name="desiredInstances" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.desiredInstances"></a>

```typescript
public readonly desiredInstances: number;
```

- *Type:* number

---

##### `desiredSessions`<sup>Required</sup> <a name="desiredSessions" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.desiredSessions"></a>

```typescript
public readonly desiredSessions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppstreamFleetComputeCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetComputeCapacity">DataAwsccAppstreamFleetComputeCapacity</a>

---


### DataAwsccAppstreamFleetDomainJoinInfoOutputReference <a name="DataAwsccAppstreamFleetDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfo">DataAwsccAppstreamFleetDomainJoinInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppstreamFleetDomainJoinInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetDomainJoinInfo">DataAwsccAppstreamFleetDomainJoinInfo</a>

---


### DataAwsccAppstreamFleetRootVolumeConfigOutputReference <a name="DataAwsccAppstreamFleetRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfig">DataAwsccAppstreamFleetRootVolumeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppstreamFleetRootVolumeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetRootVolumeConfig">DataAwsccAppstreamFleetRootVolumeConfig</a>

---


### DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference <a name="DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3Location">DataAwsccAppstreamFleetSessionScriptS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppstreamFleetSessionScriptS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetSessionScriptS3Location">DataAwsccAppstreamFleetSessionScriptS3Location</a>

---


### DataAwsccAppstreamFleetTagsList <a name="DataAwsccAppstreamFleetTagsList" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAppstreamFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppstreamFleetTagsOutputReference <a name="DataAwsccAppstreamFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTags">DataAwsccAppstreamFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppstreamFleetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetTags">DataAwsccAppstreamFleetTags</a>

---


### DataAwsccAppstreamFleetVpcConfigOutputReference <a name="DataAwsccAppstreamFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppstreamFleet } from '@cdktn/provider-awscc'

new dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfig">DataAwsccAppstreamFleetVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppstreamFleetVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamFleet.DataAwsccAppstreamFleetVpcConfig">DataAwsccAppstreamFleetVpcConfig</a>

---



