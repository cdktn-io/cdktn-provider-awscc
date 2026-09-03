# `ec2SecurityGroup` Submodule <a name="`ec2SecurityGroup` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroup <a name="Ec2SecurityGroup" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group awscc_ec2_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

new ec2SecurityGroup.Ec2SecurityGroup(scope: Construct, id: string, config: Ec2SecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig">Ec2SecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig">Ec2SecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress">putSecurityGroupEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress">putSecurityGroupIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupEgress">resetSecurityGroupEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupIngress">resetSecurityGroupIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecurityGroupEgress` <a name="putSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress"></a>

```typescript
public putSecurityGroupEgress(value: IResolvable | Ec2SecurityGroupSecurityGroupEgress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

---

##### `putSecurityGroupIngress` <a name="putSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress"></a>

```typescript
public putSecurityGroupIngress(value: IResolvable | Ec2SecurityGroupSecurityGroupIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2SecurityGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

---

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetSecurityGroupEgress` <a name="resetSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupEgress"></a>

```typescript
public resetSecurityGroupEgress(): void
```

##### `resetSecurityGroupIngress` <a name="resetSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupIngress"></a>

```typescript
public resetSecurityGroupIngress(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

ec2SecurityGroup.Ec2SecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2SecurityGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgress">securityGroupEgress</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList">Ec2SecurityGroupSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngress">securityGroupIngress</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList">Ec2SecurityGroupSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList">Ec2SecurityGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescriptionInput">groupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgressInput">securityGroupEgressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngressInput">securityGroupIngressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescription">groupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityGroupEgress`<sup>Required</sup> <a name="securityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgress"></a>

```typescript
public readonly securityGroupEgress: Ec2SecurityGroupSecurityGroupEgressList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList">Ec2SecurityGroupSecurityGroupEgressList</a>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `securityGroupIngress`<sup>Required</sup> <a name="securityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngress"></a>

```typescript
public readonly securityGroupIngress: Ec2SecurityGroupSecurityGroupIngressList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList">Ec2SecurityGroupSecurityGroupIngressList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tags"></a>

```typescript
public readonly tags: Ec2SecurityGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList">Ec2SecurityGroupTagsList</a>

---

##### `groupDescriptionInput`<sup>Optional</sup> <a name="groupDescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescriptionInput"></a>

```typescript
public readonly groupDescriptionInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `securityGroupEgressInput`<sup>Optional</sup> <a name="securityGroupEgressInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgressInput"></a>

```typescript
public readonly securityGroupEgressInput: IResolvable | Ec2SecurityGroupSecurityGroupEgress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

---

##### `securityGroupIngressInput`<sup>Optional</sup> <a name="securityGroupIngressInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngressInput"></a>

```typescript
public readonly securityGroupIngressInput: IResolvable | Ec2SecurityGroupSecurityGroupIngress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2SecurityGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescription"></a>

```typescript
public readonly groupDescription: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupConfig <a name="Ec2SecurityGroupConfig" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

const ec2SecurityGroupConfig: ec2SecurityGroup.Ec2SecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupDescription">groupDescription</a></code> | <code>string</code> | A description for the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupName">groupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupEgress">securityGroupEgress</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]</code> | [VPC only] The outbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupIngress">securityGroupIngress</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]</code> | The inbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]</code> | Any tags assigned to the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC for the security group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupDescription"></a>

```typescript
public readonly groupDescription: string;
```

- *Type:* string

A description for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#group_description Ec2SecurityGroup#group_description}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#group_name Ec2SecurityGroup#group_name}

---

##### `securityGroupEgress`<sup>Optional</sup> <a name="securityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupEgress"></a>

```typescript
public readonly securityGroupEgress: IResolvable | Ec2SecurityGroupSecurityGroupEgress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

[VPC only] The outbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#security_group_egress Ec2SecurityGroup#security_group_egress}

---

##### `securityGroupIngress`<sup>Optional</sup> <a name="securityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupIngress"></a>

```typescript
public readonly securityGroupIngress: IResolvable | Ec2SecurityGroupSecurityGroupIngress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

The inbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#security_group_ingress Ec2SecurityGroup#security_group_ingress}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2SecurityGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

Any tags assigned to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#tags Ec2SecurityGroup#tags}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#vpc_id Ec2SecurityGroup#vpc_id}

---

### Ec2SecurityGroupSecurityGroupEgress <a name="Ec2SecurityGroupSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

const ec2SecurityGroupSecurityGroupEgress: ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIp">cidrIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#destination_prefix_list_id Ec2SecurityGroup#destination_prefix_list_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationSecurityGroupId">destinationSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#destination_security_group_id Ec2SecurityGroup#destination_security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}. |

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}.

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#destination_prefix_list_id Ec2SecurityGroup#destination_prefix_list_id}.

---

##### `destinationSecurityGroupId`<sup>Optional</sup> <a name="destinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationSecurityGroupId"></a>

```typescript
public readonly destinationSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#destination_security_group_id Ec2SecurityGroup#destination_security_group_id}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}.

---

### Ec2SecurityGroupSecurityGroupIngress <a name="Ec2SecurityGroupSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

const ec2SecurityGroupSecurityGroupIngress: ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIp">cidrIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_prefix_list_id Ec2SecurityGroup#source_prefix_list_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_security_group_id Ec2SecurityGroup#source_security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_security_group_name Ec2SecurityGroup#source_security_group_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_security_group_owner_id Ec2SecurityGroup#source_security_group_owner_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}. |

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}.

---

##### `sourcePrefixListId`<sup>Optional</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourcePrefixListId"></a>

```typescript
public readonly sourcePrefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_prefix_list_id Ec2SecurityGroup#source_prefix_list_id}.

---

##### `sourceSecurityGroupId`<sup>Optional</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_security_group_id Ec2SecurityGroup#source_security_group_id}.

---

##### `sourceSecurityGroupName`<sup>Optional</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupName"></a>

```typescript
public readonly sourceSecurityGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_security_group_name Ec2SecurityGroup#source_security_group_name}.

---

##### `sourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```typescript
public readonly sourceSecurityGroupOwnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#source_security_group_owner_id Ec2SecurityGroup#source_security_group_owner_id}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}.

---

### Ec2SecurityGroupTags <a name="Ec2SecurityGroupTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

const ec2SecurityGroupTags: ec2SecurityGroup.Ec2SecurityGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#key Ec2SecurityGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#value Ec2SecurityGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#key Ec2SecurityGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group#value Ec2SecurityGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SecurityGroupSecurityGroupEgressList <a name="Ec2SecurityGroupSecurityGroupEgressList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

new ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get"></a>

```typescript
public get(index: number): Ec2SecurityGroupSecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecurityGroupSecurityGroupEgress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

---


### Ec2SecurityGroupSecurityGroupEgressOutputReference <a name="Ec2SecurityGroupSecurityGroupEgressOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

new ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationSecurityGroupId">resetDestinationSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIp"></a>

```typescript
public resetCidrIp(): void
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIpv6"></a>

```typescript
public resetCidrIpv6(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationPrefixListId"></a>

```typescript
public resetDestinationPrefixListId(): void
```

##### `resetDestinationSecurityGroupId` <a name="resetDestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationSecurityGroupId"></a>

```typescript
public resetDestinationSecurityGroupId(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpInput">cidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupIdInput">destinationSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp">cidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId">destinationSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpInput"></a>

```typescript
public readonly cidrIpInput: string;
```

- *Type:* string

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6Input"></a>

```typescript
public readonly cidrIpv6Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListIdInput"></a>

```typescript
public readonly destinationPrefixListIdInput: string;
```

- *Type:* string

---

##### `destinationSecurityGroupIdInput`<sup>Optional</sup> <a name="destinationSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupIdInput"></a>

```typescript
public readonly destinationSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

---

##### `destinationSecurityGroupId`<sup>Required</sup> <a name="destinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId"></a>

```typescript
public readonly destinationSecurityGroupId: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecurityGroupSecurityGroupEgress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>

---


### Ec2SecurityGroupSecurityGroupIngressList <a name="Ec2SecurityGroupSecurityGroupIngressList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

new ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get"></a>

```typescript
public get(index: number): Ec2SecurityGroupSecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecurityGroupSecurityGroupIngress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

---


### Ec2SecurityGroupSecurityGroupIngressOutputReference <a name="Ec2SecurityGroupSecurityGroupIngressOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

new ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourcePrefixListId">resetSourcePrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupId">resetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupName">resetSourceSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupOwnerId">resetSourceSecurityGroupOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIp"></a>

```typescript
public resetCidrIp(): void
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIpv6"></a>

```typescript
public resetCidrIpv6(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetSourcePrefixListId` <a name="resetSourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourcePrefixListId"></a>

```typescript
public resetSourcePrefixListId(): void
```

##### `resetSourceSecurityGroupId` <a name="resetSourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupId"></a>

```typescript
public resetSourceSecurityGroupId(): void
```

##### `resetSourceSecurityGroupName` <a name="resetSourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupName"></a>

```typescript
public resetSourceSecurityGroupName(): void
```

##### `resetSourceSecurityGroupOwnerId` <a name="resetSourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupOwnerId"></a>

```typescript
public resetSourceSecurityGroupOwnerId(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpInput">cidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListIdInput">sourcePrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupIdInput">sourceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupNameInput">sourceSecurityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerIdInput">sourceSecurityGroupOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp">cidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpInput"></a>

```typescript
public readonly cidrIpInput: string;
```

- *Type:* string

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6Input"></a>

```typescript
public readonly cidrIpv6Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `sourcePrefixListIdInput`<sup>Optional</sup> <a name="sourcePrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListIdInput"></a>

```typescript
public readonly sourcePrefixListIdInput: string;
```

- *Type:* string

---

##### `sourceSecurityGroupIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupIdInput"></a>

```typescript
public readonly sourceSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `sourceSecurityGroupNameInput`<sup>Optional</sup> <a name="sourceSecurityGroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupNameInput"></a>

```typescript
public readonly sourceSecurityGroupNameInput: string;
```

- *Type:* string

---

##### `sourceSecurityGroupOwnerIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerIdInput"></a>

```typescript
public readonly sourceSecurityGroupOwnerIdInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `sourcePrefixListId`<sup>Required</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId"></a>

```typescript
public readonly sourcePrefixListId: string;
```

- *Type:* string

---

##### `sourceSecurityGroupId`<sup>Required</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

---

##### `sourceSecurityGroupName`<sup>Required</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName"></a>

```typescript
public readonly sourceSecurityGroupName: string;
```

- *Type:* string

---

##### `sourceSecurityGroupOwnerId`<sup>Required</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId"></a>

```typescript
public readonly sourceSecurityGroupOwnerId: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecurityGroupSecurityGroupIngress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>

---


### Ec2SecurityGroupTagsList <a name="Ec2SecurityGroupTagsList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

new ec2SecurityGroup.Ec2SecurityGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get"></a>

```typescript
public get(index: number): Ec2SecurityGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecurityGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

---


### Ec2SecurityGroupTagsOutputReference <a name="Ec2SecurityGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer"></a>

```typescript
import { ec2SecurityGroup } from '@cdktn/provider-awscc'

new ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecurityGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>

---



